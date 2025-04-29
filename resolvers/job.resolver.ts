// import ITjobSchema from "../models/index"
import Job from "../models/jobs.model"
import Company from "../models/company.model";
// phần sử lý logic để lấy ra data
export const Jobresolvers = {
    Query: {
        getListJob: async () => {
            const jobs = await Job.findAll({
                where: { status: true }
            });
            return jobs;
        },
        getAJob: async (_, args) => {
            const { id } = args
            const job = await Job.findOne({
                where: { id, status: true }
            });
            return job;
        },
    },
    Mutation: {
        CreateJob: async (_, args) => {
            const { job } = args
            const record = await Job.create(job)
            return record
        },
        UpdateJob: async (_, args) => {
            const { job } = args
            const record = await Job.update(
                job,
                { where: { id: job.id } }
            )
            const updated = await Job.findOne({
                where: { id: job.id }
            });
            return updated;
        },
        DeleteJob: async (_, { id }) => {
            const deletedCount = await Job.destroy({ where: { id } });
            return deletedCount > 0;

        }
    },
    JobList: {
        company: async (job) => {
            const companyID = job.idCompany;
            const company = await Company.findOne({
                where: { id: companyID }
            })
            return company
        }
    }
}

