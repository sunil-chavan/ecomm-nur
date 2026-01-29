document.addEventListener('click', function (e) {
  if (e.target.matches('.add-to-cart')) {
    const id = e.target.getAttribute('data-id');
    fetch('/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') },
      body: JSON.stringify({ id: id, qty: 1 })
    }).then(r => r.json()).then(j => {
      if (j.success) alert('Added to cart');
    });
  }

  if (e.target.matches('.remove-item')) {
    const id = e.target.getAttribute('data-id');
    fetch('/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') },
      body: JSON.stringify({ id: id })
    }).then(r => r.json()).then(() => location.reload());
  }

  if (e.target.matches('#checkout')) {
    fetch('/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') },
      body: JSON.stringify({})
    }).then(r => r.json()).then(j => {
      if (j.success) {
        window.location = '/order/success/' + j.order_id;
      } else {
        alert('Checkout failed');
      }
    });
  }
});
