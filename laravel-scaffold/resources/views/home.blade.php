@extends('layouts.app')

@section('content')
  <h1>Shop</h1>
  <div id="products">
    @foreach($products as $product)
      <div class="product-card">
        <img src="{{ $product->image }}" alt="{{ $product->name }}" width="200">
        <h3>{{ $product->name }}</h3>
        <p>${{ number_format($product->price,2) }}</p>
        <button data-id="{{ $product->id }}" class="add-to-cart">Add to cart</button>
      </div>
    @endforeach
  </div>

  <a href="{{ route('cart.show') }}">View cart</a>

  <script src="/laravel-scaffold/public/js/cart.js"></script>
@endsection
