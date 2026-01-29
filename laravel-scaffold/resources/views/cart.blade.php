@extends('layouts.app')

@section('content')
  <h1>Your Cart</h1>
  @if(empty($items))
    <p>Your cart is empty.</p>
  @else
    <ul>
      @foreach($items as $it)
        <li>
          <img src="{{ $it->product->image }}" width="80" alt="{{ $it->product->name }}">
          {{ $it->product->name }} x {{ $it->qty }} - ${{ number_format($it->product->price * $it->qty,2) }}
          <button class="remove-item" data-id="{{ $it->product->id }}">Remove</button>
        </li>
      @endforeach
    </ul>
    <button id="checkout">Checkout</button>
  @endif

  <script src="/laravel-scaffold/public/js/cart.js"></script>
@endsection
