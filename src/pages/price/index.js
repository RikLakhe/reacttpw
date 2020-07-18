import React from "react";
import {Card, Row, Col, Tag} from 'antd';

import "./index.sass"

const Price = props => {

    return (
        <div className={'price-main'}>
            <Row span={24}>
                <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
                    <Card title={"The Physique Workshop"} className={'price-card'}>
                        <ul>
                            <li>Membership Options:
                                <Tag color="blue">GYM</Tag>
                                <Tag color="magenta">ZUMBA</Tag>
                                <Tag color="cyan">CARDIO</Tag>
                            </li>
                            <li>Admission Fee: 500</li>
                            <li>6 sessions of universal membership per month</li>
                            <li>If universal membership session needed after quota expires, pay extra 100 per session
                            </li>
                            <li>3% discount on all supplement purchases</li>
                        </ul>
                    </Card>
                </Col>
            </Row>
            <Row span={24}>
                <Col xxl={8} lg={12} md={12} sm={24} xs={24}>
                    <Card title={"Regular Membership"} className={'price-card'}>
                        <table className={'table table-bordered w-100'}>
                            <thead>
                            <tr className={'table-header'}>
                                <th>Type</th>
                                <th>1 month</th>
                                <th>3 month</th>
                                <th>6 month</th>
                                <th>12 month</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className={'table-header'}>Any 1</th>
                                <td>3390</td>
                                <td>9040</td>
                                <td>16385</td>
                                <td>28250</td>
                            </tr>
                            <tr>
                                <th className={'table-header'}>Any 2</th>
                                <td>4520</td>
                                <td>11300</td>
                                <td>20905</td>
                                <td>36160</td>
                            </tr>
                            <tr>
                                <th className={'table-header'}>Any 3</th>
                                <td>5085</td>
                                <td>13560</td>
                                <td>23165</td>
                                <td>40680</td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col xxl={8} lg={12} md={12} sm={24} xs={24}>
                    <Card title={"Off-Hour Membership"} className={'price-card'}>
                        <table className={'table table-bordered w-100'}>
                            <thead>
                            <tr className={'table-header'}>
                                <th>Type</th>
                                <th>1 month</th>
                                <th>3 month</th>
                                <th>6 month</th>
                                <th>12 month</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className={'table-header'}>Any 1</th>
                                <td>2500</td>
                                <td>7000</td>
                                <td>12000</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <th className={'table-header'}>Any 2</th>
                                <td>3500</td>
                                <td>8500</td>
                                <td>15000</td>
                                <td>25000</td>
                            </tr>
                            <tr>
                                <td colSpan={5}>Rules:
                                    <ul>
                                        <li>To come in other time, users have to pay Rs 75 per session.</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col xxl={8} lg={12} md={12} sm={24} xs={24}>
                    <Card title={"Universal Membership"} className={'price-card'}>
                        <table className={'table table-bordered w-100'}>
                            <thead>
                            <tr className={'table-header'}>
                                <th>Type</th>
                                <th>1 month</th>
                                <th>3 month</th>
                                <th>6 month</th>
                                <th>12 month</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className={'table-header'}>Any 1</th>
                                <td>3500</td>
                                <td>9500</td>
                                <td>17500</td>
                                <td>31000</td>
                            </tr>
                            <tr>
                                <th className={'table-header'}>Any 2</th>
                                <td>4500</td>
                                <td>12000</td>
                                <td>20500</td>
                                <td>36000</td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col xxl={8} lg={12} md={12} sm={24} xs={24}>
                    <Card title={"Personal Training"} className={'price-card'}>
                        <table className={'table table-bordered w-100'}>
                            <thead>
                            <tr className={'table-header'}>
                                <th>Type</th>
                                <th>1 month</th>
                                <th>3 month</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className={'table-header'}>Any 1</th>
                                <td>11300</td>
                                <td>28250</td>
                            </tr>
                            <tr>
                                <th className={'table-header'}>Any 2</th>
                                <td>19040</td>
                                <td>23730</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className={'table-header'}>
                                    Personal trainers get paid according to their ratings given
                                    <ul>
                                        <li><strong>Class A</strong> :70 % of PT charges</li>
                                        <li><strong>Class B</strong> :60 % of PT charges</li>
                                        <li><strong>Class C</strong> :50 % of PT charges</li>
                                        <li><strong>Per Day Pass</strong> : Any 1: 300 Any 2: 400</li>
                                        <li><strong>Per 10 Day Pass: Any 1</strong> : Any 1: 1500 Any 2: 2000</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col xxl={8} lg={12} md={12} sm={24} xs={24}>
                    <Card title={"Consulting"} className={'price-card'}>
                        <ul>
                            <li> Rs. 300 per consultation (usually reminded every 2 months)</li>
                            <li>Trainers get 250 per counseling</li>
                        </ul>
                    </Card>
                </Col>
                <Col xxl={8} lg={12} md={12} sm={24} xs={24}>
                    <Card title={"Lockers Fee"} className={'price-card'}>
                        <table className={'table table-bordered w-100'}>
                            <thead>
                            <tr className={'table-header'}>
                                <th>1 month</th>
                                <th>3 month</th>
                                <th>6 month</th>
                                <th>12 month</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>395</td>
                                <td>1020</td>
                                <td>1695</td>
                                <td>2825</td>
                            </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Price;