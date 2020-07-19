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
    Card
} from 'antd';

import {formLayout} from "../../../constants/config";

const FormItem = Form.Item
const Option = Select.Option

const Component = props => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Card className={'mt-2'}>
            <Form
                {...formLayout}
                form={form}
                layout={'vertical'}
                name="register"
                onFinish={onFinish}
                onReset={onReset}
                initialValues={{
                    id: 'TPW-1023122',
                    branch: 'kamaladi'
                }}
                scrollToFirstError
            >

                <Row gutter={16}>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="id"
                            label="Id"
                            shouldUpdate
                        >
                            <Input disabled={true}/>
                        </FormItem>
                    </Col>
                    <Col sm={24} md={6}>
                        <FormItem
                            name="branch"
                            label="Branch"
                        >
                            <Input disabled={true}/>
                        </FormItem>
                    </Col>
                </Row>

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
                                    message: 'Please input name.',
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
                                    message: 'Please enter phone.',
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
                            label="Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter address.',
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
                                    message: 'Please enter date of birth.',
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
                                    message: 'The input is not valid name.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter emergency name.',
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
                                    message: 'The input is not valid relation.',
                                },
                                {
                                    required: true,
                                    message: 'Please enter relationship.',
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
                                    message: 'Please enter emergency contact.',
                                },
                            ]}
                        >
                            <Input/>
                        </FormItem>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col>
                        <Button htmlType="reset">
                            Cancel
                        </Button>
                    </Col>
                    <Col>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default Component;