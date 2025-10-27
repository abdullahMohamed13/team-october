import { createBrowserRouter } from 'react-router-dom';
// Pages
import App from '@/App.tsx'
import Home from '@/pages/Home.tsx';
import AddReview from '@/pages/AddReview.tsx'
import DoctorDetails from '@/pages/DoctorDetails.tsx';
import Payment from '@/pages/Payment.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'doctors/:id',
        element: <DoctorDetails />,
      },
      {
        path: 'doctors/:id/booking',
        element: <Home />,
      },
      {
        path: 'doctors/:id/add-review',
        element: <AddReview />,
      },
    ]
  }
]);