/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      favoriteCareWorkers {
        items {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        nextToken
        __typename
      }
      reservations {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      favoriteCareWorkers {
        items {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        nextToken
        __typename
      }
      reservations {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      favoriteCareWorkers {
        items {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        nextToken
        __typename
      }
      reservations {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCareWorker = /* GraphQL */ `
  mutation CreateCareWorker(
    $input: CreateCareWorkerInput!
    $condition: ModelCareWorkerConditionInput
  ) {
    createCareWorker(input: $input, condition: $condition) {
      id
      name
      image
      isAuthenticated
      yearOfExperience
      hoursWorked
      cost
      location
      latitude
      longitude
      starReview
      missions {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      application {
        id
        careWorker {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        status
        createdAt
        updatedAt
        staffApplicationsToReviewId
        applicationCareWorkerId
        __typename
      }
      createdAt
      updatedAt
      userFavoriteCareWorkersId
      careWorkerApplicationId
      __typename
    }
  }
`;
export const updateCareWorker = /* GraphQL */ `
  mutation UpdateCareWorker(
    $input: UpdateCareWorkerInput!
    $condition: ModelCareWorkerConditionInput
  ) {
    updateCareWorker(input: $input, condition: $condition) {
      id
      name
      image
      isAuthenticated
      yearOfExperience
      hoursWorked
      cost
      location
      latitude
      longitude
      starReview
      missions {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      application {
        id
        careWorker {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        status
        createdAt
        updatedAt
        staffApplicationsToReviewId
        applicationCareWorkerId
        __typename
      }
      createdAt
      updatedAt
      userFavoriteCareWorkersId
      careWorkerApplicationId
      __typename
    }
  }
`;
export const deleteCareWorker = /* GraphQL */ `
  mutation DeleteCareWorker(
    $input: DeleteCareWorkerInput!
    $condition: ModelCareWorkerConditionInput
  ) {
    deleteCareWorker(input: $input, condition: $condition) {
      id
      name
      image
      isAuthenticated
      yearOfExperience
      hoursWorked
      cost
      location
      latitude
      longitude
      starReview
      missions {
        items {
          id
          time
          createdAt
          updatedAt
          userReservationsId
          careWorkerMissionsId
          __typename
        }
        nextToken
        __typename
      }
      application {
        id
        careWorker {
          id
          name
          image
          isAuthenticated
          yearOfExperience
          hoursWorked
          cost
          location
          latitude
          longitude
          starReview
          createdAt
          updatedAt
          userFavoriteCareWorkersId
          careWorkerApplicationId
          __typename
        }
        status
        createdAt
        updatedAt
        staffApplicationsToReviewId
        applicationCareWorkerId
        __typename
      }
      createdAt
      updatedAt
      userFavoriteCareWorkersId
      careWorkerApplicationId
      __typename
    }
  }
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      applicationsToReview {
        items {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      applicationsToReview {
        items {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      applicationsToReview {
        items {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
      id
      user {
        id
        name
        phoneNumber
        favoriteCareWorkers {
          nextToken
          __typename
        }
        reservations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      time
      createdAt
      updatedAt
      userReservationsId
      careWorkerMissionsId
      __typename
    }
  }
`;
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
      id
      user {
        id
        name
        phoneNumber
        favoriteCareWorkers {
          nextToken
          __typename
        }
        reservations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      time
      createdAt
      updatedAt
      userReservationsId
      careWorkerMissionsId
      __typename
    }
  }
`;
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
      id
      user {
        id
        name
        phoneNumber
        favoriteCareWorkers {
          nextToken
          __typename
        }
        reservations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      time
      createdAt
      updatedAt
      userReservationsId
      careWorkerMissionsId
      __typename
    }
  }
`;
export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
      id
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      status
      createdAt
      updatedAt
      staffApplicationsToReviewId
      applicationCareWorkerId
      __typename
    }
  }
`;
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
      id
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      status
      createdAt
      updatedAt
      staffApplicationsToReviewId
      applicationCareWorkerId
      __typename
    }
  }
`;
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
      id
      careWorker {
        id
        name
        image
        isAuthenticated
        yearOfExperience
        hoursWorked
        cost
        location
        latitude
        longitude
        starReview
        missions {
          nextToken
          __typename
        }
        application {
          id
          status
          createdAt
          updatedAt
          staffApplicationsToReviewId
          applicationCareWorkerId
          __typename
        }
        createdAt
        updatedAt
        userFavoriteCareWorkersId
        careWorkerApplicationId
        __typename
      }
      status
      createdAt
      updatedAt
      staffApplicationsToReviewId
      applicationCareWorkerId
      __typename
    }
  }
`;
