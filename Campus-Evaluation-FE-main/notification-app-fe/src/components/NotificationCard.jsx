import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

const colors = {
  Placement: "success",
  Result: "primary",
  Event: "warning",
};

export function NotificationCard({ notification }) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack spacing={1}>
            <Typography variant="h6">
              {notification.Message}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {notification.Timestamp}
            </Typography>
          </Stack>

          <Chip
            label={notification.Type}
            color={colors[notification.Type] || "default"}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}