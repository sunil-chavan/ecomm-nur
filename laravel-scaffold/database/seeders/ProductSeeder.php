<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            ['name' => 'Monstera Deliciosa', 'category'=>'Indoor','price'=>45,'rating'=>4.9,'image'=>'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=500&fit=crop','is_new'=>1],
            ['name' => 'Fiddle Leaf Fig', 'category'=>'Indoor','price'=>65,'rating'=>4.8,'image'=>'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&h=500&fit=crop','is_new'=>0],
            ['name' => 'Snake Plant', 'category'=>'Low Light','price'=>35,'rating'=>4.9,'image'=>'https://images.unsplash.com/photo-1599598425947-630e94d3a01b?w=400&h=500&fit=crop','is_new'=>0],
            ['name' => 'Pothos Golden', 'category'=>'Hanging','price'=>25,'rating'=>4.7,'image'=>'https://images.unsplash.com/photo-1596724857861-d277d5e25133?w=400&h=500&fit=crop','is_new'=>1],
        ];

        DB::table('products')->insert($products);
    }
}
