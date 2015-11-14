package com.dheeraj.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.dheeraj.googleapi.GeoLocation;
import com.google.gson.Gson;

@Path("/gapi")
public class MainService {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/getGeoCodeData")
	public Response getGeoCodeData(@QueryParam("address") String address, @QueryParam("lang") String lang) {
		GeoLocation oLocation = new GeoLocation();
		try {
			return Response.status(Status.OK).entity(oLocation.getAddressLocationDetails(address, lang)).build();
		} catch (Exception e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity("issue in fetching the details").build();
		}
	}
}
