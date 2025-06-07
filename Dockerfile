FROM eclipse-temurin:17-jdk AS builder
WORKDIR /app
COPY . .
RUN chmod +x mvnw && \
    ./mvnw clean package -f FoodDelivery_Application_APIs/pom.xml

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/FoodDelivery_Application_APIs/target/*.jar app.jar
CMD ["java", "-jar", "app.jar"]