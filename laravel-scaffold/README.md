# Laravel scaffold for Greenleaf Nursery

These are scaffold files you can copy into a fresh Laravel project to get a simple product listing, session-based cart, and checkout flow.

Quick setup

1. Create a new Laravel project (example):

```bash
composer create-project laravel/laravel greenleaf
cd greenleaf
```

2. Copy files from `laravel-scaffold/` into your Laravel project root (`routes/`, `app/Http/Controllers/`, `resources/views/`, `database/migrations/`, `database/seeders/`, `public/js/`).

3. Install and run migrations & seeder:

```bash
php artisan migrate
php artisan db:seed --class=ProductSeeder
```

4. Serve the app:

```bash
php artisan serve
```

Notes & caveats
- The scaffold uses session to store the cart (no auth). For production add validation, auth, payment integration, CSRF protection, and sanitization.
- Ensure `meta name="csrf-token"` is present in your Blade layout (or include the token in JS headers) for POST requests.
- This scaffold is minimal to demonstrate full flow: add-to-cart, view cart, checkout, success.
