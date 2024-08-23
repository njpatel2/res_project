package com.example.demo.Controller;

import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MainController {

	@RequestMapping("/getRestaurentDetails")
    @ResponseBody
	public HashMap<String,String> m1() {

        HashMap<String, String> restaurantDetails = new HashMap<>();
        restaurantDetails.put("restaurantName", "Patel Restaurant");
        restaurantDetails.put("popularDishes", "Chicken Parmesan. crushed tomato aged provolone mozzarella parmesan rigatoni. Chicken Pesto. sweet basil shaved garlic toasted pine nut crispy caper gigli.");
        restaurantDetails.put("restaurantImage", "/images/pizza-1.jpg");
        // Add more key-value pairs as needed
    
        return restaurantDetails;
	}
	// @RequestMapping("/getRestaurentDetails")
    // public ResponseEntity<String> m1() {
    //     String responseString = "success";
    //     return ResponseEntity.ok(responseString);
    // }
	 @GetMapping(value = "/**/{path:[^\\.]*}")
     public String forward() { 
         return "forward:/location";
     }
}
