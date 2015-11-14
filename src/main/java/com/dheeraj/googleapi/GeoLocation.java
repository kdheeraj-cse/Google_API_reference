package com.dheeraj.googleapi;

import java.io.IOException;
import java.util.Iterator;

import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.GeocodeResponse;
import com.google.code.geocoder.model.GeocoderRequest;

public class GeoLocation {
	public static void main(String[] args) throws IOException {
		final Geocoder geocoder = new Geocoder();
		GeocoderRequest geocoderRequest = new GeocoderRequestBuilder().setAddress("Paris, France").setLanguage("en").getGeocoderRequest();
		GeocodeResponse geocoderResponse = geocoder.geocode(geocoderRequest);
		Iterator<?> iterate = geocoderResponse.getResults().iterator();
		int count = 0; 
		while (iterate.hasNext()) {
			count++;
			System.out.println(count +"-"+ iterate.next());
		}
	}
}
