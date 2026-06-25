const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export function calculatePriority(notification) {
  const weight = weights[notification.Type] || 0;

  const timestamp = new Date(notification.Timestamp).getTime();

  return weight * 10000000000000 + timestamp;
}

export function getTopNotifications(notifications, limit = 10) {
  return notifications
    .map((notification) => ({
      ...notification,
      priority: calculatePriority(notification)
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}