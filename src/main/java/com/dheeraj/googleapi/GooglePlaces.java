package com.dheeraj.googleapi;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.ws.rs.HttpMethod;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

public class GooglePlaces {
	static final String _PLACEAPIKEY ="AIzaSyAjM2fPi7uGwln3qqZSlZzrXPJqJ2eMUOQ";
	public Response getGooglePlaces(String lat, String lng, String radius, String type, String name) throws IOException{
		HttpURLConnection conn = null;
		StringBuffer responseString = new StringBuffer();
		String _url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius="+radius+"&types="+type+"&name="+name+"&key="+_PLACEAPIKEY;	
		URL oUrl = new URL(_url);
		conn = (HttpURLConnection)oUrl.openConnection();
		conn.setRequestMethod(HttpMethod.GET);
		conn.setRequestProperty("Accept", MediaType.APPLICATION_JSON);
		if(conn.getResponseCode()!=Status.OK.getStatusCode()){
			return Response.status(conn.getResponseCode()).entity("").build();
		}
		
		BufferedReader oReader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String streamOut ;
		while ((streamOut = oReader.readLine())!=null) {
			responseString.append(streamOut);
		}
		return Response.status(conn.getResponseCode()).entity(responseString.toString()).build();
	}
}