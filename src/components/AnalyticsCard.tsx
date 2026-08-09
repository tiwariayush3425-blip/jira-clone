import { Card, CardContent, Typography } from "@mui/material";

type AnalyticsCardProps = {
  title: string;
  value: number | string;
};

function AnalyticsCard({ title, value }: AnalyticsCardProps) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mt: 1 }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AnalyticsCard;