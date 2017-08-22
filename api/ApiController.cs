using DotNetNuke.Security;
using DotNetNuke.Web.Api;
using System.Web.Http;
using ToSic.SexyContent.WebApi;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

public class ApiController : SxcApiController
{

    [HttpGet]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Anonymous)]
    [ValidateAntiForgeryToken]
    public dynamic ApiGet()
    {
        return new {
            Success = true
        };
    }

    [HttpPost]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Anonymous)]
    [ValidateAntiForgeryToken]
    public dynamic ApiPost(Dictionary<string, object> data)
    {
        return new {
            Success = true
        };
    }

}

