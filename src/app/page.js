"use client";
import {
  Layout,
  BarGraph,
  BubbleGraph,
  GaugeChart,
  LineGraph,
  PieGraph,
  DoughnutGraph,
  Table,
  CustomeFullCalender,
} from "@/components";
import {
  barChartData,
  bubleGraphData,
  gaugeGraphData,
  tableActions,
  tableColumns,
  tableData,
  lineGraphData,
  pieGraphData,
  daughnutGraphData,
  calenderConfigAndData,
} from "@/data/constants";

export default function Home() {
  return (
    <Layout>
      <div className="pr-2 mr-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center text-center mx-auto p-2 m-2">
          <div className="w-full">
            <BarGraph
              labels={barChartData.labels}
              input={barChartData.input}
              title={barChartData.title}
              header={barChartData.header}
              label={barChartData.label}
              backgroundColor={barChartData.backgroundColor}
              borderColor={barChartData.borderColor}
              titleColor={barChartData.titleColor}
              labelsColor={barChartData.labelsColor}
            />
          </div>
          <div className="w-full">
            <BubbleGraph
              imput={bubleGraphData.data}
              label={bubleGraphData.label}
              backgroundColor={bubleGraphData.backgroundColor}
            />
          </div>
          <div className="w-full">
            <GaugeChart
              labels={gaugeGraphData.labels}
              input={gaugeGraphData.input}
              backgroundColor={gaugeGraphData.backgroundColor}
              stats={gaugeGraphData.stats}
            />
          </div>
          <div className="w-full">
            <LineGraph
              lables={lineGraphData.labels}
              input={lineGraphData.input}
              label={lineGraphData.label}
              header={lineGraphData.header}
              title={lineGraphData.title}
              backgroundColor={lineGraphData.backgroundColor}
              borderColor={lineGraphData.borderColor}
              titleColor={lineGraphData.titleColor}
            />
          </div>
          <div className="w-full">
            <BubbleGraph
              imput={bubleGraphData.data}
              label={bubleGraphData.label}
            />
          </div>
          <div className="w-full">
            <PieGraph
              labels={pieGraphData.labels}
              input={pieGraphData.input}
              label={pieGraphData.label}
              colors={pieGraphData.colors}
            />
          </div>
          <div className="w-full">
            <DoughnutGraph
              labels={daughnutGraphData.labels}
              label={daughnutGraphData.label}
              input={daughnutGraphData.input}
              colors={daughnutGraphData.colors}
            />
          </div>
          <div className="w-full">
            <LineGraph
              lables={lineGraphData.labels}
              input={lineGraphData.input}
              label={lineGraphData.label}
              header={lineGraphData.header}
              title={lineGraphData.title}
            />
          </div>
          <div className="w-full h-full">
            <CustomeFullCalender
              plugins={calenderConfigAndData.plugins}
              initialView={calenderConfigAndData.initialView}
              events={calenderConfigAndData.events}
              headerToolbar={calenderConfigAndData.headerToolbar}
            />
          </div>
        </div>
        <div className="w-full">
          <Table
            caption={"Users"}
            columns={tableColumns}
            data={tableData}
            description={""}
            actions={tableActions}
          />
        </div>
      </div>
    </Layout>
  );
}
