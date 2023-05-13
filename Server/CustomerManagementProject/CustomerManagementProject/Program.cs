using CustomerManagementProject.Data;
using Microsoft.EntityFrameworkCore;
using CustomerManagementProject.Models;
using Microsoft.AspNetCore.Authentication.Cookies;

var Origins = "CorsPolicyAllowOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options => 
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));



// Add authentication services
builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = "OAuth";
})
.AddCookie()
.AddOAuth("OAuth", options =>
{
    options.ClientId = "<your-client-id>";
    options.ClientSecret = "<your-client-secret>";
    options.CallbackPath = "/signin-oauth"; // Update the callback path as per your requirements
    options.AuthorizationEndpoint = "<authorization-endpoint-url>";
    options.TokenEndpoint = "<token-endpoint-url>";
    options.UserInformationEndpoint = "<user-information-endpoint-url>";
});





//Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(Origins, builder => builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader().AllowCredentials());
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors(Origins);

app.UseAuthorization();
//app.UseAuthentication();
//app.UseAuthorization();

app.MapControllers();

app.Run();
