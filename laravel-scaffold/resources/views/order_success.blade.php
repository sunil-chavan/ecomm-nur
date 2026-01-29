@extends('layouts.app')

@section('content')
  <h1>Order Successful</h1>
  <p>Order #{{ $order->id }} placed successfully.</p>
  <p>Total: ${{ number_format($order->total,2) }}</p>
  <a href="{{ route('home') }}">Continue shopping</a>
@endsection
