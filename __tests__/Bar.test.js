import React from 'react';
import { Bar } from '../src';
import { create } from 'react-test-renderer';
import { data, dataWidthDates } from '../__mocks__/bar';
import createNodeMock from '../__mocks__/createNodeMock';
import 'jest-styled-components';

test('render correctly', () => {
  const tree = create(<Bar data={data} />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width', () => {
  const tree = create(<Bar data={data} width={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with height', () => {
  const tree = create(<Bar data={data} height={400} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with width and height', () => {
  const tree = create(<Bar data={data} width={400} height={300} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with x axis label', () => {
  const tree = create(<Bar data={data} xAxisLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with y axis label', () => {
  const tree = create(<Bar data={data} yAxisLabel="foo" />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with dates as name', () => {
  const tree = create(<Bar data={dataWidthDates} />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width horizontal grid', () => {
  const tree = create(<Bar data={data} grid />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly width vertical grid', () => {
  const tree = create(<Bar data={data} grid isHorizontal />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly X axis label rotation', () => {
  const tree = create(<Bar data={data} xAxisLabelRotation />, {
    createNodeMock,
  }).toJSON();
  expect(tree).toMatchSnapshot();
});