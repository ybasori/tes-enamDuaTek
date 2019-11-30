import React from 'react';
import {connect} from 'react-redux';
import { 
    Container,
    Content,
    Text,
    View,
    Icon,
} from 'native-base';
import {
    RefreshControl,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import Businesses from '../_services/Businesses';
import Styles from '../_utils/Styles';

class BusinessesDetailScreen extends React.Component{
    static navigationOptions = (props) => {
        return {
            title: props.navigation.getParam('title')
        }
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.onLoad();
    }

    onLoad = () => {
        this.props.getBusinessesDetail(this.props.navigation.getParam('businessesId'));
    }

    onDollars = (str) => {
        let maxStar = 4;
        let filledStar = str.split("");
        let emptyStar = [];

        for(let i =0; i<(maxStar-filledStar.length); i++){
            emptyStar.push("$");
        }

        return (
            <>
                {filledStar.map((item)=>(<Text style={{color:"#27ae60"}}>{item}</Text>))}
                {emptyStar.map((item)=>(<Text style={{color:"#bdc3c7"}}>{item}</Text>))}
            </>
        );
    }

    render(){
        return <>
            <Container>
                <Content style={Styles.content} refreshControl={
                        <RefreshControl refreshing={this.props.businessesDetail.isLoading} onRefresh={this.onLoad} />
                    }>
                        <View style={{flex: 1, flexDirection:"column"}}>
                            {(this.props.businessesDetail.data!==null)?
                            <>
                                <Swiper autoplay={true} style={{height: 250}} showsButtons={true}>
                                    {this.props.businessesDetail.data.photos.map((item, index)=>(
                                        <View key={index.toString()}>
                                        <Image
                                        style={{height: 250, width: "100%"}}
                                        source={{uri: item}} />
                                        </View>
                                ))}
                                </Swiper>
                                <View style={Styles.businessesDetailDesc}>
                                    <View style={Styles.businessesDetailReview}>
                                        <Text style={{fontSize: 25}}>{this.props.businessesDetail.data.review_count}</Text>
                                        <Text>Reviews</Text>
                                    </View>
                                    <View style={Styles.businessesDetailDescBottom}>
                                        <View style={{...Styles.businessesDetailDescBottomItem, flexDirection: "row"}}>
                                            <Text>{this.props.businessesDetail.data.rating}</Text>
                                            <Icon name="star-o" type="FontAwesome" style={{marginLeft: 5, fontSize: 20}} />
                                        </View>
                                        <View style={Styles.businessesDetailDescBottomItem}>
                                            <View style={{flexDirection: "row"}}>{this.onDollars((this.props.businessesDetail.data.price?this.props.businessesDetail.data.price:""))}</View>
                                        </View>
                                    </View>
                                </View>
                            </>: <></> }
                        </View>
                    
                </Content>
            </Container>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        businessesDetail: state.businessesDetail
    }
}
const mapDispatchToProps = {
    getBusinessesDetail: Businesses.detail
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesDetailScreen);