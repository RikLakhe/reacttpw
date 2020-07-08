import React from "react";
import {Col, Row} from "antd"

const MemberForm = props => {

    return (
        <>
            <h5>New Member</h5>

            <Row span={16}>
                <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
                    <u>Personal Information</u>
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    First Name
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Last Name
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Contact Number
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Email
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Date of Birth
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Email
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Gender
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Address
                </Col>

            </Row>
            <Row span={16}>
                <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
                    <u>Emergency</u>
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Contact Person
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Contact Number
                </Col>
            </Row>
            <Row span={16}>
                <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
                    <u>GYM Enquiry</u>
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Membership Date
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Shift
                </Col>
                <Col xxl={4} lg={4} md={4} sm={12} xs={12}>
                    Been to Gym before
                </Col>
                <Col xxl={2} lg={2} md={2} sm={12} xs={12}>
                    How long
                </Col>
                <Col xxl={6} lg={6} md={6} sm={12} xs={24}>
                    Health Issue,
                </Col>
            </Row>
            <Row span={16}>
                <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
                    <u> Measurements</u>
                </Col>
                <Col xxl={24} lg={24} md={24} sm={24} xs={24}>
                    <div className="table-responsive w-100">
                        <table className={'table table-bordered w-100'}>
                            <thead><tr>
                                <th>SN</th>
                                <th>Date</th>
                                <th>Weight</th>
                                <th>Height</th>
                                <th>Upper Arm</th>
                                <th>Fore Arm</th>
                                <th>Chest</th>
                                <th>Waist</th>
                                <th>Thigh</th>
                                <th>Calf</th>
                                <th>Action</th>
                            </tr></thead>
                            <tbody><tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr></tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default MemberForm;