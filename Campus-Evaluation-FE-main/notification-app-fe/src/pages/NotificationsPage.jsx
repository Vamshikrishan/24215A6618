import { useMemo, useState } from "react";
import {
  Alert,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { useNotifications } from "../hooks/useNotifications";

const PAGE_SIZE = 10;

export function NotificationsPage() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const { notifications, totalPages, loading, error } = useNotifications();

  const unreadCount = notifications.length;

  const filteredNotifications = useMemo(() => {
    if (filter === "All") return notifications;

    return notifications.filter((n) => n.Type === filter);
  }, [notifications, filter]);

  const paginatedNotifications = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredNotifications.slice(start, start + PAGE_SIZE);
  }, [filteredNotifications, page]);

  const pages = Math.max(
    1,
    Math.ceil(filteredNotifications.length / PAGE_SIZE)
  );

  const handleFilterChange = (newFilter) => {
    if (newFilter) {
      setFilter(newFilter);
      setPage(1);
    }
  };

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ maxWidth: 720, mx: "auto", px: 2, py: 4 }}>
      <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
        <Badge badgeContent={unreadCount} color="primary" max={99}>
          <NotificationsIcon sx={{ fontSize: 28 }} />
        </Badge>

        <Typography variant="h5" fontWeight={700}>
          Notifications
        </Typography>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ mb: 3 }}>
        <NotificationFilter
          value={filter}
          onChange={handleFilterChange}
        />
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" py={6}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          Failed to load notifications: {error}
        </Alert>
      )}

      {!loading &&
        !error &&
        filteredNotifications.length === 0 && (
          <Alert severity="info">
            No notifications found.
          </Alert>
        )}

      {!loading &&
        !error &&
        filteredNotifications.length > 0 && (
          <Stack spacing={1.5}>
            {paginatedNotifications.map((notification) => (
              <NotificationCard
                key={notification.ID}
                notification={notification}
              />
            ))}
          </Stack>
        )}

      {!loading && pages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={pages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Box>
  );
}