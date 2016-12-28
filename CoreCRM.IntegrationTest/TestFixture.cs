﻿using System;
using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;

namespace CoreCRM.IntegrationTest
{
    public class TestFixture<TStartup> : IDisposable where TStartup : class
    {
        public TestFixture()
        {
            string contentPath, basePath;
            if (Directory.GetCurrentDirectory().EndsWith("IntegrationTest")) {
                contentPath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "..", "CoreCRM"));
                basePath = Directory.GetCurrentDirectory();
            } else {
                contentPath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "CoreCRM"));
                basePath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "CoreCRM.IntegrationTest"));
            }

            var builder = new WebHostBuilder()
                .UseEnvironment("Development")
                .UseSetting("BasePath", basePath)
                .UseStartup<TStartup>()
                .UseContentRoot(contentPath);
            Server = new TestServer(builder);

            Client = Server.CreateClient();
            Client.BaseAddress = new Uri("http://localhost:5000");
        }

        public TestServer Server { get; }

        public HttpClient Client { get; }

        public void Dispose()
        {
            Client.Dispose();
            Server.Dispose();
        }
    }
}