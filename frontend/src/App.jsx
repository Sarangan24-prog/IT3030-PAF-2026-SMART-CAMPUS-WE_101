import { Routes, Route, Navigate } from 'react-router-dom'
import BookingPage from '../pages/BookingPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/bookings" replace />} />
            <Route path="/bookings" element={<BookingPage />} />
        </Routes>
    )
}

export default App
