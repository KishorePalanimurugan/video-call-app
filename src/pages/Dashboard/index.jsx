import PropTypes from "prop-types";
import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const Dashboard = (props) => {
  const DashboardProperties = createSelector(
    (state) => state.Dashboard,
    (dashboard) => ({
      chartsData: dashboard.chartsData,
    })
  );

  const { chartsData } = useSelector(DashboardProperties);

  //meta title
  document.title = "Admin Panel";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Row>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Total Boys Count</CardTitle>
                  1000
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Total Girls Count</CardTitle>
                  80
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Total Audio Calls</CardTitle>
                  12k
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Total Video Calls</CardTitle>
                  32k
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Total Payments</CardTitle>
                  1,00,000
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Coin Price (per coin)</CardTitle>
                  20
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Audio Call Price (per minute)</CardTitle>
                  10 coins
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Video Call Price (per minute)</CardTitle>
                  50 coins
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
