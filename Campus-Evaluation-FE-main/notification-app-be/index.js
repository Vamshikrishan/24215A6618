import { fetchNotifications } from "./notificationsService.js";
import { getTopNotifications } from "./priorityUtils.js";


async function main() {
  const notifications = await fetchNotifications();

  const topNotifications = getTopNotifications(
    notifications,
    10
  );

  console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");

  topNotifications.forEach((notification, index) => {
    console.log(
      `${index + 1}. [${notification.Type}] ${notification.Message}`
    );

    console.log(
      `   Time: ${notification.Timestamp}`
    );

    console.log(
      `   Priority Score: ${notification.priority}`
    );

    console.log("----------------------------------");
  });
}

main();