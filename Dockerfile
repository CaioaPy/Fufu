# Use the official .NET SDK image for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory in the container
WORKDIR /src

# Copy the .csproj and restore any dependencies (via dotnet restore)
COPY ["RPG_project_NPC_generator/RPG_project_NPC_generator.csproj", "RPG_project_NPC_generator/"]
RUN dotnet restore "RPG_project_NPC_generator/RPG_project_NPC_generator.csproj"

# Copy the rest of the code
COPY . .

# Set the working directory to the project folder
WORKDIR "/src/RPG_project_NPC_generator"

# Publish the app to the /app/publish directory
RUN dotnet publish "RPG_project_NPC_generator.csproj" -c Release -o /app/publish

# Use the official .NET runtime image for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5000

# Copy the published app from the build stage
COPY --from=build /app/publish .

# Define the entry point for the container
ENTRYPOINT ["dotnet", "RPG_project_NPC_generator.dll"]
