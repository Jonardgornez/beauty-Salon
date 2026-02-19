CREATE DATABASE beauty_studio_db;

-- 1. Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Services Table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Cart Table (Temporary storage before booking)
CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    service_id INT REFERENCES services(id) ON DELETE CASCADE,
    added_at TIMESTAMP DEFAULT NOW()
);

-- 4. Booking Groups (The "Transaction" Header)
-- This groups multiple services into one TRX ID
CREATE TABLE booking_groups (
    id SERIAL PRIMARY KEY,
    transaction_id VARCHAR(20) UNIQUE NOT NULL, -- e.g., 'TRX-1001' or 'HIS-2026-001'
    user_id INT REFERENCES users(id),
    status VARCHAR(30) DEFAULT 'Pending',       -- Pending, Confirmed, Fulfilled, Cancelled, Rejected
    payment_status VARCHAR(20) DEFAULT 'Unpaid', -- Paid, Unpaid
    reservation_fee DECIMAL(10, 2) DEFAULT 0.00,
    admin_note TEXT,                             -- Reason for rejection/notes
    created_at TIMESTAMP DEFAULT NOW()
);

-- 5. Appointments (The specific time slots for each service)
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    group_id INT REFERENCES booking_groups(id) ON DELETE CASCADE,
    service_id INT REFERENCES services(id),
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    -- Prevent double-booking same date/time
    UNIQUE(appointment_date, appointment_time)
);

CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE SET NULL, -- Keeps message even if user is deleted
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);