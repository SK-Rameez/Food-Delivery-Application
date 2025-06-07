package com.nt.io;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodRequest implements Serializable
{
	private String name;
    private String description;
    private double price;
    private String category;
}
