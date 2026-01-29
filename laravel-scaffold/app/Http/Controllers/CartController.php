<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function show(Request $request)
    {
        $cart = $request->session()->get('cart', []);
        $items = [];
        if (!empty($cart)) {
            $ids = array_keys($cart);
            $products = DB::table('products')->whereIn('id', $ids)->get()->keyBy('id');
            foreach ($cart as $id => $qty) {
                if (isset($products[$id])) {
                    $p = $products[$id];
                    $items[] = (object)[
                        'product' => $p,
                        'qty' => $qty,
                    ];
                }
            }
        }
        return view('cart', ['items' => $items]);
    }

    public function add(Request $request)
    {
        $id = (int)$request->input('id');
        $qty = max(1, (int)$request->input('qty', 1));
        $cart = $request->session()->get('cart', []);
        if (isset($cart[$id])) {
            $cart[$id] += $qty;
        } else {
            $cart[$id] = $qty;
        }
        $request->session()->put('cart', $cart);
        return response()->json(['success' => true, 'cart' => $cart]);
    }

    public function remove(Request $request)
    {
        $id = (int)$request->input('id');
        $cart = $request->session()->get('cart', []);
        if (isset($cart[$id])) {
            unset($cart[$id]);
            $request->session()->put('cart', $cart);
        }
        return response()->json(['success' => true, 'cart' => $cart]);
    }
}
