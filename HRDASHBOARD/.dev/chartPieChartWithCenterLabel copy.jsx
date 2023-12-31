import { PieChart, pieArcClasses, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';
import useMediaQuery from '@mui/material/useMediaQuery';

const data= [
  { value: 50, label: 'الحضور' ,color: '#00C49F' },
  { value: 35, label: 'الملتزمين' ,color: '#FFBB28'},
  { value: 15, label: 'المتاخرين' ,color: '#FF8042' },
];

const size = {
  width: 600,
  height: 220,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export  default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>نسبة الالتزام</PieCenterLabel>
    </PieChart>
  );
}

