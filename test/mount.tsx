import React, { ReactNode } from "react";
import { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";

import { MockedProvider } from "@apollo/client/testing";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "@redux/store";

/**
 * Custom renderer example with enzyme
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://enzymejs.github.io/enzyme/
 */

const AllTheProviders = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <>
            <MockedProvider mocks={[]} addTypename={false}>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>{children}</Provider>
                </QueryClientProvider>
            </MockedProvider>
        </>
    );
};

const mount: (node: ReactNode, options?: MountRendererProps) => ReactWrapper = (
    node,
    options,
) => {
    return mountBase(<AllTheProviders>{node}</AllTheProviders>, options);
};

// override render method
export default mount;
