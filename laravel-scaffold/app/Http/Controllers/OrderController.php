<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        $cart = $request->session()->get('cart', []);
        if (empty($cart)) {
            return response()->json(['success' => false, 'message' => 'Cart empty'], 400);
        }

        $ids = array_keys($cart);
        $products = DB::table('products')->whereIn('id', $ids)->get()->keyBy('id');

        $total = 0;
        foreach ($cart as $id => $qty) {
            $p = $products[$id];
            $total += $p->price * $qty;
        }

        $orderId = DB::table('orders')->insertGetId([
            'items' => json_encode($cart),
            'total' => $total,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $request->session()->forget('cart');

        return response()->json(['success' => true, 'order_id' => $orderId]);
    }

    public function success($orderId)
    {
        $order = DB::table('orders')->where('id', $orderId)->first();
        return view('order_success', ['order' => $order]);
    }
}
