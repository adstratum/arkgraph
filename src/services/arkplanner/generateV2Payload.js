import { MATERIALS } from '../../models/Resources';

const generateArkPlannerV2Data = (summary, stock) => {
    return {
        "@type": "@penguin-statistics/planner/config",
        items: MATERIALS.map(
            ({ id, unique_id }) => ({
                id: String(unique_id),
                have: stock[id],
                need: summary[id],
            })
        ),
        options: {
            byProduct: false,
            requireExp: false,
            requireLmb: false,
        },
        excludes: []
    };
}

export default generateArkPlannerV2Data;
