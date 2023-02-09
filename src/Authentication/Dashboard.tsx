import { Button } from "antd";
import { useHistory } from "react-router";

const Dashboard = (props: any) => {
  const history = useHistory();
  const { loginfunction } = props;
  const Logout = () => {
    loginfunction(false);
    history.push("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <Button type="primary" onClick={Logout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
