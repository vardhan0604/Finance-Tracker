"use server"

import Category, { ICategory } from "../models/category.model"

export const createCategory=async({ email, name }: ICategory)=>{
    try{
        const newCategory= new Category({
            email,
            name
        })
        await newCategory.save();
        return newCategory;
    }catch (error: any) {
        throw new Error(`Failed to add user: ${error.message}`);
    }
}

export const getCategories =async(email:string)=>{
    try{
        const categories= await Category.find({email: email})
        return categories
    }catch (error: any) {
        throw new Error(`Failed to add user: ${error.message}`);
    }
}

