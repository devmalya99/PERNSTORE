import {create} from 'zustand'
import axios from 'axios'

const BASE_URL = "http://localhost:9001"


export const useProductStore = create((set,get)=>({

    //products state
    products:[],
    loading:false,
    error:null,

    fetchProducts: async()=>{
        set({loading:true, error:null});
        try {
            const response = await axios.get(`${BASE_URL}/api/products`);
            set({loading:false, products:response.data});
        } catch (error) {
            if(error.status===429) set({loading:false, error:"Too many requests"});

            set({loading:false, error:error.message});    
        }finally{
            set({loading:false});
        }
    }
}))