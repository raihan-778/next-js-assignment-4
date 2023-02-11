import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Physics from "./AllSectionTabs/Physics";
const QuestionTab = () => {
  return (
    <div className="my-2">
      <Tabs>
        <TabList TabList className="bg-sky-400 py-3 text-slate-50">
          <Tab className="btn btn-primary mr-2">All Sections</Tab>
          <Tab className="btn btn-primary mr-2">PHYSICS</Tab>
          <Tab className="btn btn-primary mr-2">CHEMISTRY</Tab>
          <Tab className="btn btn-primary mr-2">MATH</Tab>
        </TabList>

        <TabPanel>
          <Physics></Physics>
        </TabPanel>
        <TabPanel>
          <Physics></Physics>
        </TabPanel>
        <TabPanel>
          <Physics></Physics>
        </TabPanel>
        <TabPanel>
          <Physics></Physics>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default QuestionTab;
