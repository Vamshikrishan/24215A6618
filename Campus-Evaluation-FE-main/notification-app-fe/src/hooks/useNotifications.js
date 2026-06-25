import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

const PAGE_SIZE = 10;

const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await fetchNotifications();

      const sorted = [...(data.notifications || [])]
        .map((item) => ({
          ...item,
          priority: PRIORITY[item.Type] || 0,
        }))
        .sort((a, b) => {
          if (b.priority !== a.priority) {
            return b.priority - a.priority;
          }

          return (
            new Date(b.Timestamp).getTime() -
            new Date(a.Timestamp).getTime()
          );
        });

      setNotifications(sorted);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch notifications.");
    } finally {
      setLoading(false);
    }
  };

  const total = notifications.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
    pageSize: PAGE_SIZE,
  };
}