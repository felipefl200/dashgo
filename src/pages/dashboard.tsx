import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { ApexOptions } from 'apexcharts'

const options: ApexOptions = {
  colors: [theme.colors.pink[500]],
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      "2023-01-12T00:00:00.000Z",
      "2023-01-13T00:00:00.000Z",
      "2023-01-14T00:00:00.000Z",
      "2023-01-15T00:00:00.000Z",
      "2023-01-16T00:00:00.000Z",
      "2023-01-17T00:00:00.000Z",
      "2023-01-18T00:00:00.000Z"
    ]
  },
  fill: {
    colors: [theme.colors.pink[500]],
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [31, 120, 12, 85, 99, 28, 71] }
]


export default function dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w={['100vh','100%']} my={6} maxWidth={1480} mx='auto' px={6}>
        <Sidebar />
        <SimpleGrid flex={['flexWrap', '1']} gap={4} minChildWidth='320px' alignContent='flex-start'>
          <Box p={[6, 8]} bg='gray.800' borderRadius={8} pb={4}>
            <Text fontSize='lg' mb={4} >Inscritos da semana</Text>
            <Chart options={options} series={series} type='area' width='100%' height={160} />
          </Box>
          <Box p={8} bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb={4} >Taxa de abertura</Text>
            <Chart options={options} series={series} type='area' width='100%' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}