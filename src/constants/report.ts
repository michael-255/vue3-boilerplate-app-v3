export type GeneratedReport = {
  title: string
  firstRecordDate: string
  lastRecordDate: string
  chartLabels: string[]
  chartDatasets: ChartDataset[]
}

export type ReportChart = {
  options: ChartOptions
  firstRecordDate: string
  lastRecordDate: string
  chartData: ChartData
}

export type ChartOptions = {
  responsive: boolean
  radius: number
  plugins: { [x: string]: any }
}

export type ChartData = {
  labels: string[]
  datasets: ChartDataset[]
}

export type ChartDataset = {
  label: string
  borderColor: string
  data: (number | null)[]
}
