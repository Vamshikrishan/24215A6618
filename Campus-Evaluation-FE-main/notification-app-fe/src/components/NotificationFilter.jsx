import {
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export function NotificationFilter({
  value,
  onChange,
}) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(event, newValue) => {
        if (newValue !== null) {
          onChange(newValue);
        }
      }}
    >
      <ToggleButton value="All">
        All
      </ToggleButton>

      <ToggleButton value="Placement">
        Placement
      </ToggleButton>

      <ToggleButton value="Result">
        Result
      </ToggleButton>

      <ToggleButton value="Event">
        Event
      </ToggleButton>
    </ToggleButtonGroup>
  );
}