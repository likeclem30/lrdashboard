/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// intl messages
import IntlMessages from 'Util/IntlMessages';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import {
	VisitorAreaChartWidget,
	SalesAreaChartWidget,
	OrdersAreaChartWidget,
	SupportRequest,
	OverallTrafficStatusWidget,
	OnlineVisitorsWidget,
	TodayOrdersStatsWidget,
	BookingInfo,
	NewOrderCountdown,
	FollowersWidget,
} from "Components/Widgets";

// widgets data
import {
	visitorsData,
	salesData,
	ordersData,
	trafficStatus,
} from './data';
import GoogleMapComponent from "Components/maps/google-map";

export default class HomeDashboard extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="ecom-dashboard-wrapper">
				<Helmet>
					<title>Dashboard</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={match} />
				<div className="row">
					<div className="col-sm-12 col-md-8 w-xs-half-block">
						<GoogleMapComponent />
					</div>
						<RctCollapsibleCard
							colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
							heading={<IntlMessages id="widgets.trips" />}
							// collapsible
							// reloadable
							// closeable
							fullBlock
							customClasses="overflow-hidden"
						>
							<SupportRequest />
						</RctCollapsibleCard>

				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4 w-xs-half-block">
						<VisitorAreaChartWidget
							data={visitorsData}
						/>
					</div>

					<div className="col-sm-12 col-md-4 w-xs-half-block">
						<OrdersAreaChartWidget
							data={ordersData}
						/>
					</div>
					<div className="col-sm-6 col-md-4 w-xs-full">
						<SalesAreaChartWidget
							data={salesData}
						/>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						customClasses="trafic-bar-chart"
						colClasses="col-sm-12 col-md-12 col-lg-5 d-sm-full"
						heading={<IntlMessages id="widgets.revenue" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<OverallTrafficStatusWidget
							chartData={trafficStatus}
						/>
					</RctCollapsibleCard>
					<div className="col-sm-12 col-md-12 col-lg-7 d-sm-full">
						<div className="row">
							<div className="col-sm-6 col-md-6 col-lg-6">
									<BookingInfo />
								<TodayOrdersStatsWidget />
							</div>
							<div className="col-sm-6 col-md-6 col-lg-6">
								<div className="dash-cards-lg">
									<OnlineVisitorsWidget />
								</div>
								<FollowersWidget />
								<NewOrderCountdown />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
