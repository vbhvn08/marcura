export const costsResponseMock = {
  daCurrency: {
    currency: 'SGD',
  },
  baseCurrency: {
    currency: 'USD',
    exchangeRate: 0.7598199759292418,
  },
  costs: [
    {
      id: 716,
      name: 'Port Expenses',
      displayOrder: 1,
      costItems: [
        {
          id: 1796,
          name: 'Barge Expenses',
          costItemAlias: {
            accountingCode: 'Acc-01',
          },
          annotation: {
            id: 30002,
            name: 'Asia',
          },
          costs: [
            {
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              type: 'Quoted',
              amount: 1500,
            },
            {
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              type: 'Screened',
              amount: 1500,
            },
          ],
          comments: [
            {
              id: 503,
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              author: 'Mr. Agency BO',
              comment: 'Comment 1',
              type: 'Internal',
              date: '2021-03-01T10:15:35.927924Z',
            },
          ],
        },
        {
          id: 1797,
          name: 'Fire Guard',
          costItemAlias: {
            accountingCode: 'Acc-02',
          },
          annotation: {
            id: 30002,
            name: 'Asia',
          },
          costs: [
            {
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              type: 'Quoted',
              amount: 5400,
            },
            {
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              type: 'Screened',
              amount: 5400,
            },
          ],
          comments: [
            {
              id: 504,
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              author: 'Mr. Agency BO',
              comment: 'Comment 2',
              type: 'External',
              date: '2021-03-01T10:15:46.363755Z',
            },
          ],
        },
      ],
    },
    {
      id: 618,
      name: 'Port Specific',
      displayOrder: 2,
      costItems: [
        {
          id: 1798,
          name: 'Towage (non-compulsory)',
          costItemAlias: {
            accountingCode: 'Acc-01',
          },
          annotation: {
            id: 30002,
            name: 'Asia',
          },
          costs: [
            {
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              type: 'Quoted',
              amount: 2000,
            },
            {
              daStage: 'PDA',
              persona: 'BACKOFFICE',
              type: 'Screened',
              amount: 3000,
            },
          ],
        },
      ],
    },
  ],
};

export const exchangeRatesMock = {
  sourceCurrency: 'SGD',
  paymentCurrencies: [
    {
      fromCurrency: 'SGD',
      toCurrency: 'EUR',
      exchangeRate: 0.6292198838719976,
    },
    {
      fromCurrency: 'SGD',
      toCurrency: 'GBP',
      exchangeRate: 0.5452027420445955,
    },
    { fromCurrency: 'SGD', toCurrency: 'SGD', exchangeRate: 1 },
    {
      fromCurrency: 'SGD',
      toCurrency: 'USD',
      exchangeRate: 0.7598199759292418,
    },
  ],
};
