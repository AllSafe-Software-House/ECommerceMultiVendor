import HeadBanner from "../components/HeadBanner/HeadBanner";
import { useTranslation } from "react-i18next";
import ProductOverView from "../components/ProductOverView/ProductOverView";
import { DetailsTaps } from "../components/DetailsTaps/DetailsTaps";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import { Table } from "flowbite-react";
import Review from "../components/review";
const items = (
  <div className="overflow-x-auto">
    <Table>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white ">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
            <p className="font-medium">Compositions</p>
          </Table.Cell>
          <Table.Cell>
            <p>Cotton</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white ">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
            Styles
          </Table.Cell>
          <Table.Cell>Casual</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white ">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
            Properties
          </Table.Cell>
          <Table.Cell>Short Sleeve</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);
const arrOfObj = [
  {
    id: "1",
    title: "DATA SHEET",
    value: items,
  },
  {
    id: "2",
    title: "REVIEWS",
    value: <Review />,
  },
];
export default function ProductDetails() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeadBanner text={t("custom-text.product_details")} />
      <ProductOverView />
      <DetailsTaps arr={arrOfObj} />
      <RelatedProducts />
    </>
  );
}
