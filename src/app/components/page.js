"use client";
import {
  Input,
  Select,
  TextArea,
  Submit,
  CheckBoxGroup,
  RadioButton,
  RadioButtonGroup,
  UserCard,
  Table,
  LineGraph,
  BarGraph,
  DoughnutGraph,
  PieGraph,
  BubbleGraph,
  GaugeChart,
  CustomeFullCalender,
  Layout,
} from "@/components";
import {
  radioOptions,
  checkboxes,
  tableColumns,
  tableData,
  tableActions,
  barChartData,
  bubleGraphData,
  gaugeGraphData,
  lineGraphData,
  pieGraphData,
  daughnutGraphData,
  calenderConfigAndData,
} from "@/data/constants";
import DefaultImage from "@/assets/images/default.png";

const Componet = () => {
  return (
    <div className="p-3 m-3">
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
      <Input
        label="Email"
        name="email"
        type="text"
        value=""
        placeholder="Enter Email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value=""
        placeholder="Enter Password"
      />

      <Select
        label="Country"
        name="country"
        options={[
          { key: "Usa", value: "1" },
          { key: "Kenya", value: 2 },
          { key: "Uganda", value: 3 },
        ]}
      />
      <TextArea
        label="About"
        name="about"
        rows={3}
        cols={2}
        message="Write something"
        placeholder="Write about youself"
      />
      <Submit name={"Submit"} />
      <CheckBoxGroup checkboxes={checkboxes} />

      <RadioButton name="sports" checked={true} label="Sports" />

      <RadioButtonGroup
        options={radioOptions}
        name="group1"
        defaultChecked={radioOptions[0].id}
      />

      <UserCard
        name="Victor Shemi"
        designation="Senior Developer"
        image={DefaultImage}
      />
      <Table
        caption="Our Products"
        description="Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more."
        columns={tableColumns}
        data={tableData}
        actions={tableActions}
      />
      <Layout>layout</Layout>
    </div>
  );
};

export default Componet;
