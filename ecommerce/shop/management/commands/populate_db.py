# shop/management/commands/populate_db.py

from django.core.management.base import BaseCommand
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the database with sample data'

    def handle(self, *args, **kwargs):
        sql_statements = [
            # Insert sample users
            """
            INSERT INTO shop_user (username, email, password, is_vendor, date_joined, is_active, is_superuser, is_staff, first_name, last_name)
            VALUES
            ('vendor1', 'vendor1@example.com', 'pbkdf2_sha256$260000$...', true, CURRENT_TIMESTAMP, true, false, true, 'Vendor', 'One'),
            ('vendor2', 'vendor2@example.com', 'pbkdf2_sha256$260000$...', true, CURRENT_TIMESTAMP, true, false, true, 'Vendor', 'Two'),
            ('customer1', 'customer1@example.com', 'pbkdf2_sha256$260000$...', false, CURRENT_TIMESTAMP, true, false, false, 'Customer', 'One'),
            ('customer2', 'customer2@example.com', 'pbkdf2_sha256$260000$...', false, CURRENT_TIMESTAMP, true, false, false, 'Customer', 'Two');
            """,
            # Insert sample vendors
            """
            INSERT INTO shop_vendor (user_id, shop_name, description, date_joined, rating)
            VALUES
            ((SELECT id FROM shop_user WHERE username = 'vendor1'), 'Vendor Shop 1', 'Description for Vendor Shop 1', CURRENT_TIMESTAMP, 4.5),
            ((SELECT id FROM shop_user WHERE username = 'vendor2'), 'Vendor Shop 2', 'Description for Vendor Shop 2', CURRENT_TIMESTAMP, 4.0);
            """,
            # Insert sample categories
            """
            INSERT INTO shop_category (name, slug, parent_id)
            VALUES
            ('Electronics', 'electronics', NULL),
            ('Clothing', 'clothing', NULL),
            ('Smartphones', 'smartphones', (SELECT id FROM shop_category WHERE name = 'Electronics')),
            ('Laptops', 'laptops', (SELECT id FROM shop_category WHERE name = 'Electronics'));
            """,
            # Insert sample products
            """
            INSERT INTO shop_product (vendor_id, category_id, name, slug, description, price, stock, date_added, is_active)
            VALUES
            ((SELECT id FROM shop_vendor WHERE shop_name = 'Vendor Shop 1'), (SELECT id FROM shop_category WHERE name = 'Smartphones'), 'Smartphone Model A', 'smartphone-model-a', 'Description for Smartphone Model A', 299.99, 50, CURRENT_TIMESTAMP, true),
            ((SELECT id FROM shop_vendor WHERE shop_name = 'Vendor Shop 1'), (SELECT id FROM shop_category WHERE name = 'Laptops'), 'Laptop Model B', 'laptop-model-b', 'Description for Laptop Model B', 799.99, 30, CURRENT_TIMESTAMP, true),
            ((SELECT id FROM shop_vendor WHERE shop_name = 'Vendor Shop 2'), (SELECT id FROM shop_category WHERE name = 'Clothing'), 'T-Shirt Model C', 't-shirt-model-c', 'Description for T-Shirt Model C', 19.99, 100, CURRENT_TIMESTAMP, true);
            """,
            # Insert sample orders
            """
            INSERT INTO shop_order (user_id, total_amount, status, created_at, updated_at)
            VALUES
            ((SELECT id FROM shop_user WHERE username = 'customer1'), 319.98, 'completed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            ((SELECT id FROM shop_user WHERE username = 'customer2'), 819.98, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
            """,
            # Insert sample order items
            """
            INSERT INTO shop_orderitem (order_id, product_id, quantity, price)
            VALUES
            ((SELECT id FROM shop_order WHERE user_id = (SELECT id FROM shop_user WHERE username = 'customer1')), (SELECT id FROM shop_product WHERE name = 'Smartphone Model A'), 1, 299.99),
            ((SELECT id FROM shop_order WHERE user_id = (SELECT id FROM shop_user WHERE username = 'customer1')), (SELECT id FROM shop_product WHERE name = 'T-Shirt Model C'), 1, 19.99),
            ((SELECT id FROM shop_order WHERE user_id = (SELECT id FROM shop_user WHERE username = 'customer2')), (SELECT id FROM shop_product WHERE name = 'Laptop Model B'), 1, 799.99);
            """,
            # Insert sample reviews
            """
            INSERT INTO shop_review (user_id, product_id, rating, comment, created_at)
            VALUES
            ((SELECT id FROM shop_user WHERE username = 'customer1'), (SELECT id FROM shop_product WHERE name = 'Smartphone Model A'), 5, 'Great product!', CURRENT_TIMESTAMP),
            ((SELECT id FROM shop_user WHERE username = 'customer2'), (SELECT id FROM shop_product WHERE name = 'Laptop Model B'), 4, 'Good value for money.', CURRENT_TIMESTAMP);
            """,
            # Insert sample addresses
            """
            INSERT INTO shop_address (user_id, street_address, city, state, postal_code, country, address_type)
            VALUES
            ((SELECT id FROM shop_user WHERE username = 'customer1'), '123 Main St', 'Anytown', 'Anystate', '12345', 'USA', 'shipping'),
            ((SELECT id FROM shop_user WHERE username = 'customer2'), '456 Elm St', 'Othertown', 'Otherstate', '67890', 'USA', 'billing');
            """
        ]

        with connection.cursor() as cursor:
            for statement in sql_statements:
                cursor.execute(statement)
            self.stdout.write(self.style.SUCCESS('Database populated with sample data successfully.'))