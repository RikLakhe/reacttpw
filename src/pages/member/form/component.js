import React from "react";
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker,
} from 'antd';

import {formLayout} from "../../../constants/config";

const FormItem = Form.Item
const Option = Select.Option

const Component = props => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <Form
                {...formLayout}
                form={form}
                layout={'vertical'}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    name: 'test'
                }}
                scrollToFirstError
            >
                <Row gutter={16}>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="fullName"
                            label="Name"
                            rules={[
                                {
                                    type: 'string',
                                    message: 'The input is not valid name.',
                                },
                                {
                                    required: true,
                                    message: 'Please input your name.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender.',
                                },
                            ]}
                        >
                            <Select placeholder={'Gender'}>
                                <Option key={'male'} value={'male'}>Male</Option>
                                <Option key={'female'} value={'female'}>Female</Option>
                                <Option key={'other'} value={'other'}>Other</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="phone"
                            label="Phone"
                            rules={[
                                {
                                    type: 'string',
                                    message: 'The input is not valid name.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter name.',
                                }, {
                                    max: 10,
                                    min: 7,
                                }
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid email.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter email.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="address"
                            label="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter email.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="dob"
                            label="Date of Birth"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter email.',
                                },
                            ]}
                        >
                            <DatePicker
                                style={{width:'100%'}}
                            />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="emergencyName"
                            label="Emergency Name"
                            rules={[
                                {
                                    type: 'string',
                                    message: 'The input is not valid email.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter email.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="emergencyRelation"
                            label="Emergency Relation"
                            rules={[
                                {
                                    type: 'string',
                                    message: 'The input is not valid email.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter email.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="emergencyContact"
                            label="Emergency Contact"
                            rules={[
                                {
                                    type: 'string',
                                    message: 'The input is not valid email.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter email.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                </Row>

                {/*<Row gutter={16}>*/}
                {/*    <Col sm={24} md={6}>*/}
                {/*        <FormItem*/}
                {/*            name="membershipType"*/}
                {/*            label="Member"*/}
                {/*            rules={[*/}
                {/*                {*/}
                {/*                    required: true,*/}
                {/*                    message: 'Please input your name.',*/}
                {/*                },*/}
                {/*            ]}*/}
                {/*        >*/}
                {/*            <Select placeholder={'Type'}>*/}
                {/*                <Option key={'1'} value={'1'}>1</Option>*/}
                {/*                <Option key={'2'} value={'2'}>2</Option>*/}
                {/*            </Select>*/}
                {/*        </FormItem>*/}
                {/*    </Col>*/}
                {/*    <Col sm={24} md={3}>*/}
                {/*        <FormItem*/}
                {/*            name="category"*/}
                {/*            label="Category"*/}
                {/*            rules={[*/}
                {/*                {*/}
                {/*                    required: true,*/}
                {/*                    message: 'Please select category.',*/}
                {/*                }*/}
                {/*            ]}*/}
                {/*        >*/}
                {/*            <Select placeholder={'Category'}>*/}
                {/*                <Option key={'1'} value={'1'}>1</Option>*/}
                {/*                <Option key={'2'} value={'2'}>2</Option>*/}
                {/*            </Select>*/}
                {/*        </FormItem>*/}
                {/*    </Col>*/}
                {/*    <Col sm={24} md={3}>*/}
                {/*        <FormItem*/}
                {/*            name="duration"*/}
                {/*            label="Duration"*/}
                {/*            rules={[*/}
                {/*                {*/}
                {/*                    required: true,*/}
                {/*                    message: 'Please enter email.',*/}
                {/*                },*/}
                {/*            ]}*/}
                {/*        >*/}
                {/*            <Select placeholder={'Category'}>*/}
                {/*                <Option key={'1'} value={'1'}>1 month</Option>*/}
                {/*                <Option key={'3'} value={'3'}>3 month</Option>*/}
                {/*                <Option key={'6'} value={'6'}>6 month</Option>*/}
                {/*                <Option key={'12'} value={'12'}>12 month</Option>*/}
                {/*            </Select>*/}
                {/*        </FormItem>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default Component;